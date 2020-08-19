---
template: post
title: Regex Cheatsheet
slug: regesx-cheat-sheet
draft: false
date: 2020-08-19T10:04:20.177Z
description: "Go to Regex cheat sheet to help me reading other people regular expressions "
category: Regular Expressions
tags:
  - regex
  - regular expression
---
## Ranges

All Ranges are inclusive

- **[a-z]** ⇒ from a to z lower case only
- **[A-Z]** ⇒ from A to Z upper case only
- **[0-9]** ⇒ from 0 to 9
- **[a-f]** ⇒ from a to f
- **[g-p]** ⇒ from g to p
- **[#$%&@]** ⇒ any of those symbols
- **[a-zA-Z0-9]** ⇒ all digits, lower and upper case letters.

## Repeat exact

using the {} curly braces notation

- a{5} ⇒ will match “aaaaa”.
- n{3} ⇒ will match “nnn”.
- [a-z]{4} ⇒ will match any four-letter word such as
- [a-z]{6,} ⇒ will match any word with six or more letters.
- [a-z]{8,11} ⇒ will match any word between eight and 11 letters.
- [0-9]{11} ⇒ will match an 11-digit number.

## Generic selectors

- **\d** ⇒ matches any digit that is the same as [0-9]
- **\w** ⇒ matches any letter, digit and underscore character
- **\s** ⇒ matches a whitespace character — that is, a space or tab
- **\t** ⇒ matches a tab character only
- **.** ⇒ match any digit, letter or symbol except newline.

## Special Characters (nasty ones)

- **+** ⇒ One or more
- **?** ⇒ Zero or one
- **\*** ⇒ _Zero or more._ It’s like the combination of + and ?.
- **\\** ⇒ escape character
- **[^]** ⇒ logical not or except
- **|** (pipe char) ⇒ logical or
- **()** ⇒ group together
- **^** ⇒ start of a string.
- **\$** ⇒ end of the string.