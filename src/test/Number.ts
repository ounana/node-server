/**
 * 二进制 -> 0b
 * js中表示
 * 0b010 = 2
 * 
 * 算法：除以2取余数，然后从下向上排列
 * 11/2 1
 * 5/2  1
 * 2/2  0
 * 1/2  1
 *
 * 常见二进制数字
 * 0000   0
 * 0001   1
 * 0010   2
 * 0011   3
 *
 * 
 * 16进制 -> 0x
 * A ~ F = 10 ~ 15
 * js中表示
 * 0x20 = 32
 * 0xA = 10
 * 
 * 8进制 -> 0o
 * js中表示
 * 0o10 = 8
 * 
 * 
 * 科学计数法 -> E
 * 含义：表示极大极小数
 * 
 * 2E4 = 2 * (10 ** 4)
 * 3.125E7 = 3.125 * (10 ** 7)
 * 2E-2 = 2 * (0.1 ** 2)
 * 
 */

/**
 * >> 右移运算符 ->
 * 11 >> 2 = 2
 * 0000 0000 0000 0000 0000 0000 0000 1011
 *                \|/
 * 0000 0000 0000 0000 0000 0000 0000 0010
 *
 * 
 * << 左移运算符 ->
 * 3 << 2 = 12
 * 0000 0000 0000 0000 0000 0000 0000 0011
 *                \|/
 * 0000 0000 0000 0000 0000 0000 0000 1100
 *
 *
 * ^  按位异或xor -> 真真=假，真假=真，假假=假
 * 3 ^ 2 = 1
 * 0000 0000 0000 0000 0000 0000 0000 0011
 * 0000 0000 0000 0000 0000 0000 0000 0010
 *                \|/
 * 0000 0000 0000 0000 0000 0000 0000 0001
 *
 *
 * &  按位and -> 真真=真，真假=假，假假=假
 * 25 & 3 = 1
 * 0000 0000 0000 0000 0000 0000 0001 1001
 * 0000 0000 0000 0000 0000 0000 0000 0011
 *                \|/
 * 0000 0000 0000 0000 0000 0000 0000 0001
 * 
 * 
 * |  按位or -> 真真=真，真假=真，假假=假
 * 2 | 3 = 3
 * 0000 0000 0000 0000 0000 0000 0000 0010
 * 0000 0000 0000 0000 0000 0000 0000 0011
 *                \|/
 * 0000 0000 0000 0000 0000 0000 0000 0011
 * 
 */