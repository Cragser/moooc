<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserDashboardController extends AbstractController
{
    /**
     * @Route("/dashboard/{reactRouting}", name="user_dashboard",  defaults={"reactRouting": null})
     */
    public function index()
    {
        return $this->render('app/userBase.html.twig', [
        ]);
    }
}
