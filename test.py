# open file in read mode:
# print each word
# get count

count = 0
f = open("english-nouns.txt", "r")

for word in f:
	print(word)
	count += 1
	
print(count)