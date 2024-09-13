# Atomic Design

## 概要

コンポーネントを以下の5つに分けて捉える。

- Atoms
- Molecules
- Organisms
- Templates
- Pages

## 注意点

Atomic Designの考え方はいいけど、フォルダにするべきではない。クリーンアーキテクチャと同じ。
抽象概念としては良い考え方だけど、具体的な実現方法は考える必要がある。
フォルダは「粒度」でなく「文脈」で分ける。

## その他

AtomsやMoleculesはlibやsharedに置いて、特定のドメインでフォルダを区切るといい。その中にそれぞれcomponentsやmodelsを置く。
`lib/ui/components/buttons/SaveButton.tsx`みたいにする。

Atomic DesignのAtomsやMoleculesは「特定のドメインに依存しない」のが特徴だけど、それならlibに置けばいいだけ。
