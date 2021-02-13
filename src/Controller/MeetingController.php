<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MeetingController extends AbstractController
{

    // const API_SECRET = "TyumUqxLwrqVf0PYnMwEMWQPHONJwfoAfAkW";
    // const apiKey = "j6avxHn8RKWB3S6Ybw-s_Q"


    private const API_SECRET = 'TyumUqxLwrqVf0PYnMwEMWQPHONJwfoAfAkW';
    public const API_PUBLIC = 'j6avxHn8RKWB3S6Ybw-s_Q';

    /**
     * @Route("/meeting", name="meeting")
     */
    public function index(Request $request)
    {
        // http://127.0.0.1:8000/meeting?meetingNumber=2986262776
        $meetingNumber = $request->get('meetingNumber') ?? 2986262776;
        $apiKey = self::API_PUBLIC;
        $userName = 'Sergio Reyes';

        $passWord = '9RXqBL';
        $userEmail = 'cragser@hotmail.com';

        return $this->render('meeting/index.html.twig', [
            'signature' => $this->generateSignature($apiKey, $meetingNumber),
            'meetingNumber' =>  $meetingNumber,
            'userName' => $userName,
            'passWord' =>  $passWord,
            'userEmail' => $userEmail,
            'apiPublic' => $apiKey
        ]);
    }

    private function generateSignature($api_key, $meeting_number, $role = 0)
    {
        $api_secret = self::API_SECRET;
        $time = time() * 1000 - 30000; //time in milliseconds (or close enough)
        $data = base64_encode($api_key . $meeting_number . $time . $role);
        $hash = hash_hmac('sha256', $data, $api_secret, true);
        $_sig = $api_key . "." . $meeting_number . "." . $time . "." . $role . "." . base64_encode($hash);
        //return signature, url safe base64 encoded
        return rtrim(strtr(base64_encode($_sig), '+/', '-_'), '=');
    }
}
