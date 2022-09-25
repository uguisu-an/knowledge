props の値を API に渡してデータを取得するような部分は、created や mounted よりも watch + immediate オプションで処理した方がいい。
props の値が入っていない時は watch の中で確認して省略できるし、もし props の値が変わっても watch が走ってくれる。
