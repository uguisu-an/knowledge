# Web Accessibility Initiative Accessible Rich Internet Applications: WAI-ARIA

https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics

意味付けされていないHTMLに意味を与える。

まずはセマンティックHTMLがベースで、セマンティックHTMLでカバーしきれない部分を補助するためにWAI-ARIAがある。

- Role: 要素の役割、要素が何か、何をするか (role)
- State: 要素の状態、要素がどうなっているか (aria-disabledなど)
- Property: 要素の性質、要素間の関係性 (aria-labbeledbyなど)

「ARIAの第一原則は、ARIAを使わないこと」と言われるほど、まずはHTML標準機能で解決できないかを検討することが重要。
