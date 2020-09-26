<?php

namespace App\Controller;

use App\Entity\Post;
use App\Form\PostType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

class PostController extends AbstractController
{
    /**
     * @Route("/post/create", name="create-post")
     */
    public function index(Request $request, SluggerInterface $slugger)
    {
        $post = new Post();
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $photoFile = $form->get('photo')->getData();
            if ($photoFile) {
                $originalFilename = pathinfo($photoFile->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $photoFile->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $photoFile->move(
                        $this->getParameter('photo_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    throw new \Exception('We have problems with the file');
                }

                // updates the 'photoFilename' property to store the PDF file name
                // instead of its contents
                $post->setPhoto($newFilename);
            }
            $em = $this->getDoctrine()->getManager();
            $user = $this->getUser();
            $post->setUser($user);
            $em->persist($post);
            $em->flush();
            return $this->redirect('/dashboard');
        }


        return $this->render('post/index.html.twig', [
            'controller_name' => 'PostController',
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/post/{id}", name="post")
     */
    public function read($id)
    {
        $em = $this->getDoctrine()->getManager();
        $post  = $em->getRepository(Post::class)->find($id);
        return $this->render('post/read.html.twig', [
            'post' => $post,
        ]);
    }


    /**
     * @Route("/my/posts", name="my-posts")
     */
    public function userPosts()
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $posts = $em->getRepository(Post::class)->findBy([
            'user' => $user
        ]);
        return $this->render('post/user.html.twig', [
            'posts' => $posts,
        ]);
    }
}
