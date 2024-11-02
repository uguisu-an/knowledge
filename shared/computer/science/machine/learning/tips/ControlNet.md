# ControlNet

text-to-image の出力を制御する。

複数のモデルが組み込まれている。
canny (輪郭), openpose (棒人間) を組み合わせて細かく調整できるようになった。

https://github.com/lllyasviel/ControlNet

https://kurokumasoft.com/2023/02/16/stable-diffusion-controlnet/

https://zenn.dev/engineercafe/articles/11d895ce74cf83

主輪郭を描かせて要所だけ調整する手もあるし、逆にイラストから抽出した主輪郭を canny で固定して服だけ着せ替える手もあるみたい。

https://twitter.com/kohya_tech/status/1641443633516904450?s=20
