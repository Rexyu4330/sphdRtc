# RTC

Affiche le temps avant que la bus passe

## Prerequisites

Python3
Nodejs

dependencies:
```
Python:
requests
scrollphathd software

Nodejs:
axios
body-parser
express
```

## How to install

```
curl https://get.pimoroni.com/scrollphathd | bash
```

Clone directory,

Install latest version of Nodejs and npm,

Run command in directory to get dependencies
```
cd sphdRtc
npm install
```

Edit rc.local:
```
sudo nano /etc/rc.local
```
```
sudo bash /home/pi/sphdRtc/startserver.sh &
sudo python3 /home/pi/sphdRtc/sphd.py &
```


## Based on/with

* [Scroll pHAT HD](https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-scroll-phat-hd)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
