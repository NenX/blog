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

.section .bss

.equ BUFFER_SIZE,500
.lcomn BUFFER_DATA,BUFFER_SIZE

.section .text
# 栈位置
.equ ST_SIZE_RESERVE,16
.equ ST_FD_IN,-8
.equ ST_FD_OUT,-16
.equ ST_ARGC,0
.equ ST_ARGV_0,8
.equ ST_ARGV_1,16
.equ ST_ARGV_2,24

.globl main
.type main, @function

main:
movq %rsp,%rbp
subq $ST_SIZE_RESERVE,%rsp

open_files:
open_fd_in:

movq $SYS_OPEN,%rax
movq $ST_ARGV_1(%rbp),%rbx
movq $O_RDONLY, %rcx
movq $0666, %rdx
int $LINUX_SYSCALL

store_fd_in:
movq %rax,$ST_FD_IN(%rbp)

open_fd_out:
movq $SYS_OPEN, %rax
movq $ST_ARGV_2, %rbx
movq $O_CREAT_WRONLY_TRUNC, %rcx
movq $0666,%rdx
int $LINUX_SYSCALL

store_fd_out:
movq %rax,$ST_FD_OUT(%rbp)

# 主循环
read_loop_begin:

movq $SYS_READ,%rax
movq $ST_FD_IN(%rbp),%rbx
movq $BUFFER_DATA,%rcx
movq $BUFFER_SIZE,%rdx
int LINUX_SYSCALL

cmpq $END_OF_FILE,%rax
jle end_loop

end_loop:
