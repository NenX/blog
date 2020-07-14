# as exit.s -o exit.o
# ld exit.o -o exit




.globl print_number
.type print_number, @function
print_number:
    pushq %rbp
    movq %rsp,%rbp
    subq $16,%rsp
    movl %edi,-4(%rbp)
    movl -4(%rbp),%eax
    movl $10,%ebx
  do:  
    xorl %edx,%edx
    divl %ebx
    addl $0x30,%edx
    movl %eax,-8(%rbp)
    movl %edx,%edi
    call putchar@PLT
    movl -8(%rbp), %eax
    cmpl $0,%eax
    je end
    jmp do
 end:
    leave
    ret
