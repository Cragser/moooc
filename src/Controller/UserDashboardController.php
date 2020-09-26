<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserDashboardController extends AbstractController
{
    /**
     * @Route("/dashboard", name="user_dashboard")
     */
    public function index()
    {
        return $this->render('app/userBase.html.twig', [
        ]);
    }
}
