	.file	"main1.c"
	.text
	.section	.rodata.str1.1,"aMS",@progbits,1
.LC0:
	.string	"./a.out"
	.text
	.globl	main
	.type	main, @function
main:
.LFB63:
	.cfi_startproc
	subq	$24, %rsp
	.cfi_def_cfa_offset 32
	movq	%fs:40, %rax
	movq	%rax, 8(%rsp)
	xorl	%eax, %eax
	movl	$11, 4(%rsp)
	leaq	4(%rsp), %rsi
	movq	%rsi, %rdx
	leaq	.LC0(%rip), %rdi
	call	execve@PLT
	movq	8(%rsp), %rcx
	xorq	%fs:40, %rcx
	jne	.L4
	movl	$0, %eax
	addq	$24, %rsp
	.cfi_remember_state
	.cfi_def_cfa_offset 8
	ret
.L4:
	.cfi_restore_state
	call	__stack_chk_fail@PLT
	.cfi_endproc
.LFE63:
	.size	main, .-main
	.ident	"GCC: (Ubuntu 7.5.0-3ubuntu1~18.04) 7.5.0"
	.section	.note.GNU-stack,"",@progbits
