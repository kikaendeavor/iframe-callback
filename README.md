iframe-callback
===============

iframe组件，实现组件和父页面的通信


1. 组件提供唯一的回调方法iframecb，并且返回实例化后的单例。

2. 父级页面直接调用iframecb内部方法，实现与组件的简单交互。

3. 具体业务在iframe页面实现。
   iframe调用组件内置的iframecbAsync，实现对组件的控制。
   iframecbAsync调了一个是map方法，利用hash map的方式完成方法的模糊匹配和参数传递
        function iframecbAsync(data){    
            iframecb.map()[data.result](data);
        }

4. 成功后调用map中的一个子方法onSuccess，onSuccess的具体实现由parent负责。


这样，整个流程被串联起来，实现iframe组件的无缝衔接和交互。
