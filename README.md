# ReactJS JapTrainer
How this app works:
1. Select Hiragana or Katakana.
2. A random character from the selected character set will be displayed on screen, along with a keyboard and a Cancel button.
3. The user presses the appropriate key on the keyboard.
4. The display will show if the answer is correct or wrong.
5. Repeat steps 2 to 4 for 20 times.
6. At the end, show the score and displa a Restart button.

## Components
### `Header`
`Header` displays the graphic, and:
- If the exercise has not started, show Hiragana and Katakana options as radio buttons, and Start button.
- If character set has been selected and the exercise has started, show Restart or Cancel button dependng on whether 20 questions have been answered.

### `Display`
`Display` displays:
- HTML instructions if exercise has not started.
- A random character (the `char` property) from the array returned by `GetCharset()` if exercise has started. 
  - additionally, if question has been answered, the result is displayed.

### `Keyboard`
`Keyboard` shows the keys in the layout provided by `GetKeys()`. 
- If the exercise has not started, this is not shown.
- If the question has been answered, all the keys are disabled.
- If the question has not been answered, all the keys are enabled.
  - clicking on a key sets the answer, which is checked against the `romaji` property. 

## Utilities
### `GetCharSet`
This will return an array of objects. The content will depend on whether "hiragana" or "katakana" is passed in as an argument. The structure of each element is as follows:
- `char` is the actual Hiragana or Katakana character.
- `romaji` is the English spelling of the character.

### `GetKeys`
This returns the layout of the keys on the keyboard, in an array. There are some blanks, which is deliberate.
