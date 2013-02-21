node-redis
==========

Learning Redis (and Node) by doing exercises from the Seven Databases in Seven weeks book.

Task one - Do a transaction
---
run by ```$node transaction.js``

Task two - Have a reader blocking on a list and a writer writing to the same list.
---
First start the reader by ```$node reader.js```.
Then the writer by ```$node writer.js```

Reader will then output what the writer wrote to that list.