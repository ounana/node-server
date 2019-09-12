/**
 * 科学计数法 -> E
 * 表示极大极小数
 * 
 * 2E4 = 2 * (10 ** 4)
 * 3.125E7 = 3.125 * (10 ** 7)
 * 2E-2 = 2 * (0.1 ** 2)
 * 
 */

/**
 * js表示各种进制数据 ->
 * 
 * 2进制
 * 0b0000_0010 = 2
 * 0b0000_0011 = 3
 * 
 * 8进制
 * 0o10 = 8
 * 0o11 = 9
 * 
 * 16进制 A ~ F = 10 ~ 15
 * 0x10 = 16
 * 0x20 = 32
 * 0xA0 = 160
 */

/**
 * ~ 按位取反 ->
 * 0000_0101     5
 * 1111_1010     -6
 * 
 * 
 * 原码 ->
 * 原码表示法即最高位为符号位
 * +11 原码 00001011
 * -11 原码 10001011
 * 
 * 1111 1111 1111 1111 1111 1111 1111 1010
 * 左边为1，表示负数
 * 取反后 + 1 = 原码
 * 0000 0000 0000 0000 0000 0000 0000 0101 + 1 = -6
 * 
 * 补码 ->
 * 使用高位作为符号位，
 * 正数的补码就是正数本身，
 * 负数的补码就是其原码取反加一的结果。
 * 
 * 
 * -10 ，二进制表示为
 * 1000 0000 0000 0000 0000 0000 0000 1010
 * 
 * 原码，取其绝对值也就是10，即
 * 0000 0000 0000 0000 0000 0000 0000 1010
 * 
 * 反码，按位取反，得
 * 1111 1111 1111 1111 1111 1111 1111 0101
 * 
 * 补码，即将反码加1，得
 * 1111 1111 1111 1111 1111 1111 1111 0110
 * 
 * 
 * 取反两次，求绝对值
 * ~~
 * 
 * 
 * 无符号
 * 最小 00000000  0
 * 最大 11111111  255
 * 
 * 有符号，首位为符号位
 * 最小 11111111  -128
 * 最大 01111111  127
 */


/**
 * 位运算 ->
 * 
 * >> 右移运算符
 * 11 >> 2   = 2
 * 0000 1011 => 0000 0010
 * 
 * << 左移运算符
 * 3 << 2    = 12
 * 0000 0011 => 0000 1100
 * 
 * ^  按位异或xor -> 真真=假，真假=真，假假=假
 * 3 ^ 2 = 1
 * 0000 0011
 * 0000 0010
 * \|/
 * 0000 0001
 * 
 * &  按位and -> 真真=真，真假=假，假假=假
 * 25 & 3 = 1
 * 0001 1001
 * 0000 0011
 * \|/
 * 0000 0001
 * 
 * |  按位or -> 真真=真，真假=真，假假=假
 * 2 | 3 = 3
 * 0000 0010
 * 0000 0011
 * \|/
 * 0000 0011
 * 
 */

/**
 * 8位无符号整数  占 1个字节
 * 16位无符号整数 占 2个字节
 * 34位无符号整数 占 4个字节
 * 64位无符号整数 占 8个字节
 *
 * 64位无符号整数 表示的最大数为：
 * 0 ~ (2n ** 64n) -1n
 * 
 * 64位无符号整型二进制 转十进制
 * 00000000 00000000 00000000 00000000 11110000 00001111 11110000 00001111
 * a[4] << 24 = 11110000 00000000 00000000 00000000  +
 * a[5] << 16 = 00001111 00000000 00000000           +
 * a[6] << 8  = 11110000 00000000                    +
 * a[7]       = 00001111
 * 
 * 
 * 创建一个无符号的16位整型数组，每个位置占用2个字节
 * const arr = new Uint16Array(20)
 * 所以arr总共占40个字节
 *
 */