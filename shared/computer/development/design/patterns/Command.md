# Command

Command の役割は引数をなくすこと。
実行時はタイミングだけを伝える形になる。

実行時の引数はない方がいい。

Service と Command の比較

Service の場合

    $service = new AddXxxService(new XxxRepository);
    $service->addXxx($xxxId);

Command の場合

    $command = new AddXxxCommand(new XxxRepository, $xxxId);
    $command->exec();

両方使う場合

    $service = new AddXxxService(new XxxRepository);
    $command = new AddXxxCommand($service, $xxxId);
    $command->exec();

Command に戻り値があってもいい。
