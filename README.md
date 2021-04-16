## Currency To Words

## Introduction

Converts Currency Numbers (including decimal points) into words.

## Samples
* 1 --> one dollar
* 25.1 --> twenty-five dollars and ten cents
* 0.01 --> zero dollars and one cent
* 45100 --> forty-five thousand one hundred dollars

* Custom currency
  - 25.1 --> twenty-five cedis and ten pesewas


### Install

```js
npm install currency-to-words --save
```

### Usage

```js
import { CurrencyToWords } from 'currency-to-words'
```

```js
const words = CurrencyToWords(0.01);
const customCurrency = CurrencyToWords(0.01, 'cedi', 'pesewa' );
```

OR

```js
const words = CurrencyToWords('105');
const customCurrency = CurrencyToWords('105', 'cedi', 'pesewa' );
```

# TODO
- [ ] Supporting other languages



**Meisam Malekzadeh**
