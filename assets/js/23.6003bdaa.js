(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{380:function(e,t,o){"use strict";o.r(t);var s=o(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"_1-5-caches-matter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-caches-matter"}},[e._v("#")]),e._v(" 1.5 Caches Matter")]),e._v(" "),o("p",[e._v("An important lesson from this simple example is that a system spends a lot of\ntime moving information from one place to another. The machine instructions in\nthe hello program are originally stored on disk. When the program is loaded,\nthey are copied to main memory. As the processor runs the program, instructions are copied from main memory into the processor. Similarly, the data string "),o("code",[e._v("hello,world\\n")]),e._v(", originally on disk, is copied to main memory and then copied\nfrom main memory to the display device. From a programmer’s perspective, much\nof this copying is overhead that slows down the “real work” of the program. Thus,\na major goal for system designers is to make these copy operations run as fast as\npossible.")]),e._v(" "),o("p",[e._v("Because of physical laws, larger storage devices are slower than smaller storage devices. And faster devices are more expensive to build than their slower counterparts. For example, the disk drive on a typical system might be 1,000 times\nlarger than the main memory, but it might take the processor 10,000,000 times\nlonger to read a word from disk than from memory.")]),e._v(" "),o("p",[e._v("Similarly, a typical register file stores only a few hundred bytes of information,\nas opposed to billions of bytes in the main memory. However, the processor can\nread data from the register file almost 100 times faster than from memory. Even\nmore troublesome, as semiconductor technology progresses over the years, this\nprocessor–memory gap continues to increase. It is easier and cheaper to make\nprocessors run faster than it is to make main memory run faster.")]),e._v(" "),o("p",[e._v("To deal with the processor–memory gap, system designers include smaller,\nfaster storage devices called cache memories (or simply caches) that serve as\ntemporary staging areas for information that the processor is likely to need in\nthe near future. Figure 1.8 shows the cache memories in a typical system. An L1\ncache on the processor chip holds tens of thousands of bytes and can be accessed\nnearly as fast as the register file. A larger L2 cache with hundreds of thousands\nto millions of bytes is connected to the processor by a special bus. It might take 5\ntimes longer for the processor to access the L2 cache than the L1 cache, but this is\nstill 5 to 10 times faster than accessing the main memory. The L1 and L2 caches are\nimplemented with a hardware technology known as static random access memory\n(SRAM). Newer and more powerful systems even have three levels of cache: L1,\nL2, and L3. The idea behind caching is that a system can get the effect of both\na very large memory and a very fast one by exploiting locality, the tendency for\nprograms to access data and code in localized regions. By setting up caches to hold\ndata that are likely to be accessed often, we can perform most memory operations\nusing the fast caches.")]),e._v(" "),o("p",[e._v("One of the most important lessons in this book is that application programmers who are aware of cache memories can exploit them to improve the performance of their programs by an order of magnitude. You will learn more about\nthese important devices and how to exploit them in Chapter 6.")])])}),[],!1,null,null,null);t.default=a.exports}}]);