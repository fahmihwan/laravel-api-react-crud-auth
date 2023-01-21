<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }
    public function login(Request $request)
    {

        $credentials = [
            'username' => $request->username,
            'password' => $request->password
        ];



        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function index()
    {
        return User::all();
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function register(Request $request)
    {
        $validatedData =  $request->validate([
            'username' => ['required', 'min:3', 'max:255', 'unique:users'],
            'hak_akses' => ['required'],
            'password' => ['required'],
        ]);

        // $validatedData['password'] = bcrypt($validatedData['password']);     //versi pakai bycript
        $validatedData['password'] = Hash::make($validatedData['password']);    //versi dokumentas

        $user =  User::create($validatedData);
        if ($user) {
            return response()->json(['message' => 'success'], 201);
        } else {
            return response()->json(['message' => 'fail']);
        }
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
