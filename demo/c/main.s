	.file	"main.c"
	.text
	.globl	gv
	.data
	.align 4
	.type	gv, @object
	.size	gv, 4
gv:
	.long	1
	.globl	g00zero00
	.bss
	.align 4
	.type	g00zero00, @object
	.size	g00zero00, 4
g00zero00:
	.zero	4
	.comm	ggg,4,4
	.text
	.globl	fn
	.type	fn, @function
fn:
.LFB0:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	movl	%edi, -4(%rbp)
	movl	sv.2268(%rip), %eax
	addl	$1, %eax
	movl	%eax, sv.2268(%rip)
	movl	sss.2269(%rip), %eax
	addl	$1, %eax
	movl	%eax, sss.2269(%rip)
	movl	-4(%rbp), %eax
	addl	$1, %eax
	popq	%rbp
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size	fn, .-fn
	.section	.rodata
.LC0:
	.string	"abcd"
	.text
	.globl	main
	.type	main, @function
main:
.LFB1:
	.cfi_startproc
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	subq	$16, %rsp
	movl	$123, -8(%rbp)
	movl	-8(%rbp), %eax
	movl	%eax, %edi
	call	fn
	movl	%eax, -4(%rbp)
	movl	i(%rip), %eax
	movl	%eax, %edi
	call	show_int@PLT
	leaq	.LC0(%rip), %rdi
	movl	$0, %eax
	call	printf@PLT
	movl	-4(%rbp), %eax
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE1:
	.size	main, .-main
	.data
	.align 4
	.type	sv.2268, @object
	.size	sv.2268, 4
sv.2268:
	.long	2
	.local	sss.2269
	.comm	sss.2269,4,4
	.local	s00zero00.2270
	.comm	s00zero00.2270,4,4
	.ident	"GCC: (Ubuntu 7.5.0-3ubuntu1~18.04) 7.5.0"
	.section	.note.GNU-stack,"",@progbits
