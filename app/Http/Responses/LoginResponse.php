<?php

namespace App\Http\Responses;

use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        /** @var Request $request */
        $user = $request->user();

        if ($user && method_exists($user, 'hasRole') && $user->hasRole('seller')) {
            return redirect()->route('dashboard');
        }

        $preLoginUrl = $request->session()->pull('auth.pre_login_url');
        if (is_string($preLoginUrl) && $preLoginUrl !== '') {
            return redirect()->to($preLoginUrl);
        }

        return redirect()->intended(route('home'));
    }
}
