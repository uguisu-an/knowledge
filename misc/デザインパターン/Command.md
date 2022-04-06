# Command

Commandの役割は引数をなくすこと。
実行時はタイミングだけを伝える形になる。

実行時の引数はない方がいい。

ServiceとCommandの比較

Serviceの場合

    $service = new AddXxxService(new XxxRepository);
    $service->addXxx($xxxId);

Commandの場合

    $command = new AddXxxCommand(new XxxRepository, $xxxId);
    $command->exec();

両方使う場合

    $service = new AddXxxService(new XxxRepository);
    $command = new AddXxxCommand($service, $xxxId);
    $command->exec();

Commandに戻り値があってもいい。
