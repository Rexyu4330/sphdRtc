#import scrollphathd as sphd
import time
import requests

while True:
    try:
        resp = requests.post('http://localhost/minutes')
        minutes = resp.content.decode('utf-8') + 'm'
    except:
        minutes = 'Nanm'
    print(minutes)
    sphd.clear()
    sphd.write_string(minutes, brightness=0.8)
    sphd.show()
    time.sleep(5)