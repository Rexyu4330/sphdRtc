import scrollphathd as sphd
import time

sphd.write_string('15m', brightness=0.8)
sphd.show()

while True:
    time.sleep(2)
