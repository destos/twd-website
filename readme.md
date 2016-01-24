# Tulsa Web Devs New Site Mockup
## How to install
1. Git pull repo
2. cd into directory
3. npm install
4. npm install -g gulp *[If you don't have gulp already installed]*
5. npm gulp

##### Webserver will be started and running on port 8080. Default browser should automatically open to the page to be edited.

*browser extension for chrome used for fast live reloading [Download Here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)*
> not necessary unless you want livereloading features for scss changes

___

## SCSS Tree Structure

##### Container / Row structure is built from flexbox

| Folders        | Uses         |
| ---------------|:-------------:|
| containers     | Place to store grid/container layout scss  |
| helpers        | Place to store helper classes for scss     |
| layouts        | Componets split into individual files      |
| mixins         | Mixins used throughout the project         |
| resets         | Resets for the default html styles         |
| variables      | variables used throughout the project      |

___

## Examples Classes To Use

##### main container classes
.container or .c

##### row classes
| min    | max     |  offset-min  | offset-max|
|--------|---------|--------------|-----------|
|.r-xs-1 | .r-xs-12| .r-xs-os-0   |.r-xs-os-12|
|.r-sm-1 | .r-sm-12| .r-sm-os-0   |.r-sm-os-12|
|.r-md-1 | .r-md-12| .r-md-os-0   |.r-md-os-12|
|.r-lg-1 | .r-lg-12| .r-lg-os-0   |.r-lg-os-12|
|.r-xl-1 | .r-xl-12| .r-xl-os-0   |.r-xl-os-12|


