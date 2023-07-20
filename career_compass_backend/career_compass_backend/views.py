# backend/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate

@csrf_exempt
def login(request):
    if request.method == 'POST':
        # リクエストからメールアドレスとパスワードを取得
        email = request.POST.get('email')
        password = request.POST.get('password')

        # ユーザーを認証する
        user = authenticate(username=email, password=password)

        if user is not None:
            # ログイン成功
            return JsonResponse({'message': 'ログインに成功しました。'})

    # ログイン失敗
    return JsonResponse({'error': 'ログインに失敗しました。'}, status=401)
