#include "stdio.h"
#include "unistd.h"
#include "string.h"
void main()
{
    printf("i am child\n");
    int fd = 3;
    char *s = "text from child process!!\n";
    write(fd, s, strlen(s));
}