一度useStateが設定されたら、useStateの引数に与えられた初期値が変わっても影響しない。
DialogがdefaultValuesを持って開くたびにリセットするような形式を取るなら、useEffectで初期化する。

Stateはトランザクションの単位で持つべきだ。
例えば、項目一つ一つをフォームコントロールで変えるなら、項目一つ一つをStateにする。
