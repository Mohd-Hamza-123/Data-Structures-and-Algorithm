import time

attempts = 0
max_attempts = 5
wait_Time= 1

while(attempts < max_attempts):
    print("Attempts",attempts + 1, "-- wait for", wait_Time, "seconds")
    time.sleep(wait_Time)
    attempts += 1
    wait_Time *= 2