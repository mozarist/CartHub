<?php

namespace App\Http\Responses;

use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;

class RegisterResponse implements RegisterResponseContract
{
    public function toResponse($request)
    {
        /** @var Request $request */
        $preRegisterUrl = $request->session()->pull('auth.pre_register_url');

        if (is_string($preRegisterUrl) && $preRegisterUrl !== '') {
            return redirect()->to($preRegisterUrl);
        }

        return redirect()->intended(route('home'));
    }
}
