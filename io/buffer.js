//JS语言自身只有字符串数据类型，没有二进制数据类型，因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。
//JS itself has only string data type, not binary data type, so NodeJS provides a global constructor Buffer equivalent to String to provide operations on binary data.

// const bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);//@deprecated
const bin = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
console.log(bin[0]);//104

const str = bin.toString('utf-8');
console.log(str);//hello

const bin2 = Buffer.from('hello', 'utf-8');
console.log(bin2);//<Buffer 68 65 6c 6c 6f>

//Buffer与字符串有一个重要区别。字符串是只读的，并且对字符串的任何修改得到的都是一个新字符串，原字符串保持不变。至于Buffer，更像是可以做指针操作的C语言数组。例如，可以用[index]方式直接修改某个位置的字节。
//Buffers have one important difference from strings. The string is read-only, and any modification to the string results in a new string, leaving the original string unchanged. As for Buffer, it is more like a C language array that can do pointer operations. For example, you can use the [index] method to directly modify the byte at a certain position.
bin[0] = 0x48;
console.log(bin.toString('utf-8'));//Hello

//slice方法也不是返回一个新的Buffer，而更像是返回了指向原Buffer中间的某个位置的指针。因此对slice方法返回的Buffer的修改会作用于原Buffer。
//The slice method is not returning a new Buffer, but more like returning a pointer to a position in the middle of the original Buffer. Therefore, modifications to the Buffer returned by the slice method will be applied to the original Buffer.
const sub = bin2.slice(2);
sub[0] = 0x65;
console.log(bin2.toString('utf-8'));//heelo

//因此，如果想要拷贝一份Buffer，得首先创建一个新的Buffer，并通过.copy方法把原Buffer中的数据复制过去。这个类似于申请一块新的内存，并把已有内存中的数据复制过去。
//Therefore, if you want to copy a Buffer, you must first create a new Buffer, and use the .copy method to copy the data in the original Buffer. This is similar to applying for a new piece of memory and copying the data in the existing memory.
const bin3 = Buffer.from(bin);
bin.copy(bin3);
bin3[0] = 0x68;
console.log(bin);//<Buffer 48 65 6c 6c 6f>
console.log(bin3);//<Buffer 68 65 6c 6c 6f>
