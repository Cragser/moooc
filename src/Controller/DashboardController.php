<?php

namespace App\Controller;

use App\Entity\Post;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    /**
     * @Route("/dashboard", name="dashboard")
     */
    public function index(Request $request, PaginatorInterface $paginator)
    {
        $em = $this->getDoctrine()->getManager();

        $pagination = $paginator->paginate(
            $em->getRepository(Post::class)->findLast(), /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            1 /*limit per page*/
        );
        return $this->render('dashboard/index.html.twig', [
            'controller_name' => 'DashboardController',
            'pagination' => $pagination
        ]);
    }
}
