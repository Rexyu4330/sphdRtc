#import scrollphathd as sphd
import time
import requests

resp = requests.post('https://127.0.0.1/minutes')
print(resp)
#sphd.write_string('15m', brightness=0.8)
#sphd.show()

while True:
    time.sleep(2)
