# as exit.s -o exit.o
# ld exit.o -o exit


.globl main
.type main, @function
.equ GG,1235
main:
    pushq %rbp
    movq %rsp,%rbp

    movl $GG,%edi
    call print_number
    leave
    ret

