t = int(input())

while (t):
	g = str(input())
	e = f = 0
	for j in g:
		if (int(j) == 0):
			e+=1
		elif (int(j) == 1):
			f+=1
	if (e == 1 or f == 1):
		print ("Yes")
	else:
		print ("No")
	t -= 1
