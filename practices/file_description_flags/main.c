#include "stdio.h"
#include "unistd.h"
#include "string.h"
#include "wait.h"
#include "fcntl.h"
void main()
{
    int fd = dup(0), pid;
    fcntl(3,F_SETFD,1);
    char **c;
    printf("main fd: %d\n", fd);
    
    if ((pid = fork()) == 0)
    {
        execv("child", c);
    }
    wait(0);
}