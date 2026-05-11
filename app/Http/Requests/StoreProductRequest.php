<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // TODO: Add authorization logic for sellers
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'product_name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'images' => 'nullable|array|max:9',
            'images.*' => 'image|mimes:jpg,jpeg,png,webp|max:5120',
            'payment_method' => 'required|array|min:1',
            'payment_method.*' => 'in:cash,credit_card,e-wallet,bank_transfer',
        ];
    }

    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'images.array' => 'Images must be an array.',
            'images.max' => 'You can upload a maximum of 9 images per product.',
            'images.*.image' => 'Each image must be a valid image file.',
            'images.*.mimes' => 'Each image must be a jpg, jpeg, png, or webp file.',
            'images.*.max' => 'Each image must not exceed 5MB.',
            'payment_method.required' => 'At least one payment method must be selected.',
            'payment_method.*.in' => 'Invalid payment method selected.',
        ];
    }
}
