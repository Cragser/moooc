<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CourseController extends AbstractController
{
    /**
     * @Route("/course", name="courses_list")
     */
    public function index()
    {
        return $this->render('course/index.html.twig', [
            'controller_name' => 'CourseController',
        ]);
    }
}
