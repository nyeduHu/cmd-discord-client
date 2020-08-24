# CommandLine Discord client.
A simple discord client within cmd or powershell.

## Instalation

  ```
  git clone https://github.com/nyeduHu/cmd-discord-client.git
  ```
  then

  ```
  npm i
  ```

## Configuration
 All things can be found in the `.env` file.
 ### How to get your token?
  https://www.youtube.com/watch?v=lqSSXwcL7o0
 ### Channel settings
  example:
  ```json
  {
    "channels": [
       {"id":"740253887151927357", "name":"general", "guild":"Magical Village"},
       {"id":"740253887158357367", "name": "memes", "guild":"I dunno"}
    ],
    "format":"default"
  }
  ```
## Start
Just use 
```js
node index.js
```
