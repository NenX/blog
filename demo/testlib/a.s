	.file	"main1.c"
	.text
	.section	.rodata.str1.1,"aMS",@progbits,1
.LC0:
	.string	"sggb"
.LC1:
	.string	"name=222"
.LC2:
	.string	"./a.out"
	.text
	.globl	main
	.type	main, @function
main:
.LFB63:
	.cfi_startproc
	subq	$56, %rsp
	.cfi_def_cfa_offset 64
	movq	%fs:40, %rax
	movq	%rax, 40(%rsp)
	xorl	%eax, %eax
	leaq	.LC0(%rip), %rax
	movq	%rax, (%rsp)
	movq	$0, 8(%rsp)
	leaq	.LC1(%rip), %rax
	movq	%rax, 16(%rsp)
	movq	$0, 24(%rsp)
	leaq	16(%rsp), %rdx
	movq	%rsp, %rsi
	leaq	.LC2(%rip), %rdi
	call	execve@PLT
	movq	40(%rsp), %rcx
	xorq	%fs:40, %rcx
	jne	.L4
	movl	$0, %eax
	addq	$56, %rsp
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
