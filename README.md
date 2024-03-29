# modern-time-utils

A simple npm package for common timestamp utility functions.

## Installation

You can install modern-time-utils using npm:

```bash
 npm install modern-time-utils
```

## Usage
### getCurrentTimeStamp(): number
Returns the current timestamp in milliseconds.
```javascript
import { getCurrentTimeStamp } from 'modern-time-utils';

const timeStamp = getCurrentTimeStamp();
console.log(`Current timestamp: ${timeStamp}`); 
```

### getCurrentTimeStampInSeconds(): number
Returns the current timestamp in seconds.
```javascript
import { getCurrentTimeStampInSeconds } from 'modern-time-utils';

const timeStampInSeconds = getCurrentTimeStampInSeconds();
console.log(`Current timestamp in seconds: ${timeStampInSeconds}`);
```



## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)