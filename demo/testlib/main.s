
	.section	.rodata
.LC0:
	.string	"hheell"
	.globl	main

main:
	pushq	%rbp
	movq	%rsp, %rbp
	movl	$3, %edx
	leaq	.LC0(%rip), %rsi
	movl	$1, %edi
	call	write@PLT
	nop
	popq	%rbp
	ret
