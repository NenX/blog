#系统调用号
.equ SYS_OPEN,5
.equ SYS_WRITE,4
.equ SYS_READ,3
.equ SYS_CLOSE,6
.equ SYS_EXIT,1
# 文件打开选项
.equ O_RDONLY,0
.equ O_CREAT_WRONLY_TRUNC,03101
# 标准文件描述符
.equ STDIN,0
.equ STDOUT,1
.equ STDERR,2

# 系统调用中断
.equ LINUX_SYSCALL,0x80
.equ END_OF_FILE,0
.equ NUMBER_ARGUMENTS,2

.equ BUFFER_SIZE,500

.section .bss
.lcomm BUFFER_DATA,BUFFER_SIZE

.section .text
# 栈位置
.equ ST_SIZE_RESERVE,8
.equ ST_FD_IN,-4
.equ ST_FD_OUT,-8
.equ ST_ARGC,0
.equ ST_ARGV_0,4
.equ ST_ARGV_1,8
.equ ST_ARGV_2,12

.globl main
.type main, @function

main:
movl %esp,%ebp
subl $ST_SIZE_RESERVE,%esp

open_files:
open_fd_in:

movl $SYS_OPEN,%eax
movl ST_ARGV_1(%ebp),%ebx
movl $O_RDONLY, %ecx
movl $0666, %edx
int $LINUX_SYSCALL

store_fd_in:
movl %eax,ST_FD_IN(%ebp)

open_fd_out:
movl $SYS_OPEN, %eax
movl $ST_ARGV_2, %ebx
movl $O_CREAT_WRONLY_TRUNC, %ecx
movl $0666,%edx
int $LINUX_SYSCALL

store_fd_out:
movl %eax,ST_FD_OUT(%ebp)

# 主循环
read_loop_begin:

movl $SYS_READ,%eax
movl ST_FD_IN(%ebp),%ebx
movl $BUFFER_DATA,%ecx
movl $BUFFER_SIZE,%edx
int $LINUX_SYSCALL

cmpl $END_OF_FILE,%eax
jle end_loop

end_loop:
