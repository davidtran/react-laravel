<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/documents', function() {
    $documents = DB::select('select * from documents');
    // echo asset('storage/'.$documents[0]->filename);
    foreach ($documents as $document) {
        $document->url = asset('storage/'.$documents[0]->filename);
    }
    return $documents;    
});

Route::post('/documents', function(Request $request) {
    $uploadedFile = $request->file('file');
    $filename = str_replace(' ', '_', time().'.pdf');
    $path = Storage::disk('public')->putFileAs(
        $filename,
        $uploadedFile,
        $filename
    );
    $item = [
        'filename' => $path, 
        'uploader' => 'me, dustin',
        'name' => $request->file('file')->getClientOriginalName(),
    ];    
    $documentId = DB::table('documents')->insertGetId($item);
    $item['id'] = $documentId;
    $item['url'] = asset('storage/'.$path);
    return $item;
});
