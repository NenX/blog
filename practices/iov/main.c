
#include "sys/uio.h"
int main(int argc, char const *argv[])
{
    struct iovec iov[3];
    struct A
    {
        char c;
        int i;
        char s[4];
    };
    struct A a;
    int i;
    char s[8];
    iov[0].iov_base = &a;
    iov[0].iov_len = sizeof(struct A);
    iov[1].iov_base = &i;
    iov[1].iov_len = sizeof(int);
    iov[2].iov_base = &s;
    iov[2].iov_len = sizeof(char [8]);

    
    return 0;
}
