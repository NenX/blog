## What is sh
<code>sh</code> (the Shell Command Language) is a programming language described by <a target="_blank" href="http://pubs.opengroup.org/onlinepubs/009695399/utilities/xcu_chap02.html">POSIX standard</a>. It has many implementations (<code>dash</code>, <code>bash</code>). 

Because <code>sh</code> is a specification, not an implementation, <code>/bin/sh</code> is a symlink (or a hard link) to  an actual implementation.
```bash
file -h /bin/sh
# /bin/sh: symbolic link to dash
```
## What is bash

bash started as an sh-compatible implementation (although it predates the POSIX standard by a few years), but as time passed it has acquired many extensions. Many of these extensions may change the behavior of valid POSIX shell scripts, so by itself bash is not a valid POSIX shell. Rather, it is a dialect of the POSIX shell language.
bash supports a --posix switch, which makes it more POSIX-compliant. It also tries to mimic POSIX if invoked as sh.
For a long time, /bin/sh used to point to /bin/bash on most GNU/Linux systems. As a result, it had almost become safe to ignore the difference between the two. But that started to change recently.
Some popular examples of systems where /bin/sh does not point to /bin/bash. 
Modern Debian and Ubuntu systems, which symlink sh to dash by default;


## What is dash
Dash implements the Single Unix Spec, then it does not have to do more to meet that formal spec.Dash is a shell that has poor usability by modern standards when used as an interactive log-in shell, but is faster in executing POSIX-compliant scripts than Bash.


