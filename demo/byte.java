class B {
    public static void main(String[] args) {
        byte[] b1 = "Hello".getBytes("UTF-8"); // 按系统默认编码转换，不推荐
        byte[] b2 = "Hello".getBytes("UTF-8"); // 按UTF-8编码转换
        byte[] b4 = "Hello".getBytes("GBK"); // 按GBK编码转换
        byte[] b3 = "Hello".getBytes(StandardCharsets.UTF_8); // 按UTF-8编码转换
        System.out.print(b1);
    }
}