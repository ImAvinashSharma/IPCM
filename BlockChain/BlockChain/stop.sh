export id=$1
kill $id
kill `expr $id + 1`
kill `expr $id + 2`
kill `expr $id + 3`