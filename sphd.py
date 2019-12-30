import scrollphathd as sphd
import time
import requests
#sphd.rotate(180)

while True:
    try:
        resp = requests.post('http://localhost:3000/minutes')
        minutes = resp.content.decode('utf-8') + 'm'
    except:
        minutes = 'Nanm'
    print(minutes)
    sphd.clear()
    sphd.write_string(minutes, brightness=0.8)
    sphd.show()
    time.sleep(5)