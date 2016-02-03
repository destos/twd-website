# Tulsa Web Devs Website

## How to install
1. Make sure you have NodeJS installed
2. Pull repository

    `$ git clone git@github.com:tulsawebdevs/twd-website.git`
3. Change into repo directory

    `$ cd twd-website`
4. Run install scripts to get build dependencies

    `$ ./script/install`
5. Run development command to start auto-build and test web server

    `$ ./script/dev`

##### Web server will be started and running on port 8080. Default browser should automatically open to the page to be edited.

*browser extension for chrome used for fast live reloading [Download Here](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)*
> not necessary unless you want live-reloading features for scss changes

___

## SCSS Tree Structure

##### Container / Row structure is built from flexbox

| Folders        | Uses         |
| ---------------|:-------------:|
| containers     | Place to store grid/container layout scss  |
| helpers        | Place to store helper classes for scss     |
| layouts        | Components split into individual files     |
| mixins         | Mixins used throughout the project         |
| resets         | Resets for the default html styles         |
| variables      | variables used throughout the project      |

___

## Examples Classes To Use

##### main container classes
.container

##### main row class
.row

##### column classes
| min      | max       |  offset-min    | offset-max  |
|----------|-----------|----------------|-------------|
|.col-xs-1 | .col-xs-12| .col-xs-os-0   |.col-xs-os-12|
|.col-sm-1 | .col-sm-12| .col-sm-os-0   |.col-sm-os-12|
|.col-md-1 | .col-md-12| .col-md-os-0   |.col-md-os-12|
|.col-lg-1 | .col-lg-12| .col-lg-os-0   |.col-lg-os-12|
|.col-xl-1 | .col-xl-12| .col-xl-os-0   |.col-xl-os-12|
