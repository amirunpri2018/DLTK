Search.setIndex({docnames:["api/dltk","api/dltk.core","api/dltk.io","api/dltk.networks","api/dltk.networks.autoencoder","api/dltk.networks.gan","api/dltk.networks.regression_classification","api/dltk.networks.segmentation","api/dltk.networks.super_resolution","index"],envversion:50,filenames:["api/dltk.rst","api/dltk.core.rst","api/dltk.io.rst","api/dltk.networks.rst","api/dltk.networks.autoencoder.rst","api/dltk.networks.gan.rst","api/dltk.networks.regression_classification.rst","api/dltk.networks.segmentation.rst","api/dltk.networks.super_resolution.rst","index.rst"],objects:{"":{dltk:[0,0,0,"-"]},"dltk.core":{activations:[1,0,0,"-"],losses:[1,0,0,"-"],metrics:[1,0,0,"-"],residual_unit:[1,0,0,"-"],upsample:[1,0,0,"-"]},"dltk.core.activations":{leaky_relu:[1,1,1,""],prelu:[1,1,1,""]},"dltk.core.losses":{dice_loss:[1,1,1,""],sparse_balanced_crossentropy:[1,1,1,""]},"dltk.core.metrics":{abs_vol_difference:[1,1,1,""],crossentropy:[1,1,1,""],dice:[1,1,1,""]},"dltk.core.residual_unit":{vanilla_residual_unit_3d:[1,1,1,""]},"dltk.core.upsample":{get_linear_upsampling_kernel:[1,1,1,""],linear_upsample_3d:[1,1,1,""]},"dltk.io":{abstract_reader:[2,0,0,"-"],augmentation:[2,0,0,"-"],preprocessing:[2,0,0,"-"]},"dltk.io.abstract_reader":{IteratorInitializerHook:[2,2,1,""],Reader:[2,2,1,""]},"dltk.io.abstract_reader.IteratorInitializerHook":{after_create_session:[2,3,1,""]},"dltk.io.abstract_reader.Reader":{get_inputs:[2,3,1,""],serving_input_receiver_fn:[2,3,1,""]},"dltk.io.augmentation":{add_gaussian_noise:[2,1,1,""],add_gaussian_offset:[2,1,1,""],elastic_transform:[2,1,1,""],extract_class_balanced_example_array:[2,1,1,""],extract_random_example_array:[2,1,1,""],flip:[2,1,1,""]},"dltk.io.preprocessing":{normalise_one_one:[2,1,1,""],normalise_zero_one:[2,1,1,""],resize_image_with_crop_or_pad:[2,1,1,""],whitening:[2,1,1,""]},"dltk.networks":{autoencoder:[4,0,0,"-"],gan:[5,0,0,"-"],regression_classification:[6,0,0,"-"],segmentation:[7,0,0,"-"],super_resolution:[8,0,0,"-"]},"dltk.networks.autoencoder":{convolutional_autoencoder:[4,0,0,"-"]},"dltk.networks.autoencoder.convolutional_autoencoder":{convolutional_autoencoder_3d:[4,1,1,""]},"dltk.networks.gan":{dcgan:[5,0,0,"-"]},"dltk.networks.gan.dcgan":{dcgan_discriminator_3d:[5,1,1,""],dcgan_generator_3d:[5,1,1,""]},"dltk.networks.regression_classification":{resnet:[6,0,0,"-"]},"dltk.networks.regression_classification.resnet":{resnet_3d:[6,1,1,""]},"dltk.networks.segmentation":{deepmedic:[7,0,0,"-"],fcn:[7,0,0,"-"],unet:[7,0,0,"-"]},"dltk.networks.segmentation.deepmedic":{crop_central_block:[7,1,1,""],deepmedic_3d:[7,1,1,""]},"dltk.networks.segmentation.fcn":{residual_fcn_3d:[7,1,1,""],upscore_layer_3d:[7,1,1,""]},"dltk.networks.segmentation.unet":{asymmetric_residual_unet_3d:[7,1,1,""],residual_unet_3d:[7,1,1,""],upsample_and_concat:[7,1,1,""]},"dltk.networks.super_resolution":{simple_super_resolution:[8,0,0,"-"]},"dltk.networks.super_resolution.simple_super_resolution":{simple_super_resolution_3d:[8,1,1,""]},"dltk.utils":{SlidingWindow:[0,2,1,""],sliding_window_segmentation_inference:[0,1,1,""]},"dltk.utils.SlidingWindow":{next:[0,3,1,""]},dltk:{core:[1,0,0,"-"],io:[2,0,0,"-"],networks:[3,0,0,"-"],utils:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"601cdf56d2b424757de5":2,"boolean":[4,5,6,7,8],"class":[0,1,2,6,7],"default":7,"export":2,"float":[1,2],"function":[0,1,2,4,6,7,8],"int":[0,1,2,4,5,6,7,8],"long":7,"new":2,"return":[0,1,2,4,5,6,7,8],"super":8,"true":[0,1,7],For:9,Its:9,One:[1,4,5,6,7,8],The:[1,4,5,6,7],abs_vol_differ:1,absolut:1,abstract_read:0,acceler:9,accord:[1,7],accur:7,activ:[0,4,6,7,8],add:[2,7],add_gaussian_nois:2,add_gaussian_offset:2,added:2,addit:[1,2,9],adjust:0,adversari:5,adversi:5,after:2,after_create_sess:2,all:[4,5,6,7],allow:1,along:2,alpha:[1,2],alpha_initi:1,also:[2,9],altern:7,amount:0,analysi:[2,7,9],appli:[2,4,6,7,8],applic:9,appreci:9,architectur:[6,7],argument:2,arrai:[0,2],array_lik:[0,7],art:9,assembl:0,asymmetric_residual_unet_3d:7,augment:0,autoencod:[0,3],automat:1,avd:1,avoid:1,axi:2,background:1,balanc:[1,2],base:[0,2,6,7],batch:[0,1,2],batch_siz:[0,2],been:2,best:2,better:1,between:[0,1],bia:[1,4,5,6,7,8],bias_initi:[1,4,6,7,8],bias_regular:[1,4,6,7,8],bilinear:7,biomed:7,block:8,bool:[0,1,4,5,6,7,8],brain:7,build:[1,2],calcul:[0,1],can:[0,1,2,9],categor:1,center:7,challeng:7,channel:[1,2,6],chat:9,class_weight:2,classif:6,cnn:7,code:9,coeffici:1,com:[2,7,9],come:9,commun:9,compon:2,comput:1,concaten:7,confer:2,connect:7,constant:1,construct:[0,2],continu:2,contribut:9,convolt:1,convolut:[1,2,4,5,6,7,8],convolutional_autoencod:[0,3],convolutional_autoencoder_3d:4,coord:2,core:0,correspond:[0,2],creat:2,crf:7,crop:[2,7],crop_central_block:7,crossentropi:1,current:[7,9],cvpr:[6,7],data:2,dataset:2,dcgan:[0,3],dcgan_discriminator_3d:5,dcgan_generator_3d:5,deep:[1,5,6,7],deepmed:[0,3],deepmedic_3d:7,deform:2,describ:2,detail:9,determin:[1,2,4,5,6,7],develop:9,dice:1,dice_loss:1,dict:[0,2,4,5,6,7,8],dictionari:[0,2,4,5,6,7,8],differ:[1,7],dim_i:1,dim_x:1,dim_z:1,dimens:[0,1,2],discrimin:5,distribut:2,dltk_:9,document:2,done:[4,5,6,7],download:9,downsampl:[1,4,5,6,7],dtype:2,each:[0,1,2,4,5,6,7,8],eccv:[1,6,7],effici:7,elast:2,elastic_transform:2,element:2,enabl:[7,9],encod:7,end:2,engin:9,ensur:9,entri:9,erniejunior:2,error:1,estim:[1,2,4,5,6,7,8],etc:0,eval:[1,4,5,6,7,8],evalu:1,exampl:[2,9],example_s:2,example_shap:2,except:2,excit:9,exist:9,export_savedmodel:2,extract:[0,2,8],extract_class_balanced_example_arrai:2,extract_random_example_arrai:2,extractor:7,factor:[1,4,5,6,7,8],fals:[1,4,5,6,7,8],fast:9,fc_filter:7,fc_residu:7,fcn:[0,3],featur:[2,4,5,6,7,8],fed:7,fetch:0,field:9,file:[2,9],file_refer:2,filter:[1,4,5,6,7,8],first:[2,4,5,6,7],first_fc_kernel:7,fit:2,flag:[0,1,7],flexibl:[6,7],flip:2,focu:9,found:9,frequenc:1,from:[1,2,7,9],full:[2,9],fulli:7,gan:[0,3],gaussian:2,gener:[2,5],get_input:2,get_linear_upsampling_kernel:1,gist:2,github:[2,7,9],gitter:9,given:2,goal:9,greatli:9,handl:[1,2],has:[2,8],has_batch_dim:0,have:[1,2],held:2,hidden:4,high:8,higher:7,hold:2,hook:2,host:9,http:[2,7],ident:[1,6,7],imag:[0,2,6,7,8,9],image_channel:2,image_list:2,imagelist:2,img_shap:0,img_siz:2,implement:[1,7,9],in_filt:[1,7],includ:1,include_background:1,independ:2,index:9,indic:0,individu:9,infer:0,inform:[1,9],init_op:[1,4,6,7,8],initi:[1,2,4,6,7,8],initialis:[1,2],input:[0,1,2,4,5,6,7,8],input_fn:2,inputs2:7,instal:9,instanc:2,instruct:9,intern:2,isl:7,item:2,iter:[0,2],iteratorinitializerhook:2,kamnitsa:7,kamnitsask:7,kei:0,kernel:[1,4,6,7,8],kernel_initi:[1,4,6,7,8],kernel_regular:[1,4,6,7,8],kernel_s:[1,5],kernel_spatial_shap:1,konstantino:7,kwarg:2,label:[1,2],larger:2,layer:[1,4,5,6,7,8],leaki:[1,7],leaky_relu:[1,7],learn:[1,6],len:[4,5],lesion:7,like:2,linear:1,linear_upsample_3d:1,link:9,list:[0,1,2,4],localis:2,locat:7,logit:1,loss:0,low:[8,9],maintain:9,map:[0,1,6,7],martin:9,mean:[1,2],medic:[7,9],method:9,metric:0,miccai:7,modal:7,mode:[1,2,4,5,6,7,8],modekei:[1,2,4,5,6,7,8],model:2,modul:9,more:2,move:0,mri:7,multi:7,multipl:7,n_exampl:2,name:[1,2],nan:1,ndarrai:[1,2],need:2,nest:2,net:7,network:[0,1,2,9],neural:[2,9],newli:9,next:0,nick:9,nois:[2,5],none:[0,1,2,4,6,7,8],normal:7,normal_filt:7,normal_input_shap:7,normal_kernel:7,normal_residu:7,normal_strid:7,normalis:2,normalise_one_on:2,normalise_zero_on:2,note:7,notebook:9,num_class:[1,6,7],num_convolut:[4,5,6,8],num_hidden_unit:4,num_res_unit:[6,7],num_residual_unit:7,number:[0,1,2,4,5,6,7,8],object:[0,1,2,4,6,7,8],offset:2,onli:1,only_pres:1,oper:0,ops:[0,1,4,6,7,8],ops_list:0,option:[0,1,2,4,5,6,7,8],origin:7,out_filt:[1,5,7],outofrangeerror:2,output:[0,1,4,5,6,7,8],over:0,overlap:0,pad:[2,7],param:2,paramet:[0,1,2,4,5,6,7,8],particular:9,pass:2,patch:2,path:7,pathwai:7,pawlowski:9,per:[1,4,5,6,8],perform:0,placehold:0,placeholder_shap:2,platt:2,pleas:9,posit:0,potenti:1,practic:2,pre:9,predict:[1,2,4,5,6,7,8],prelu:[1,7],preprocess:0,present:[0,1],probabilist:1,probabl:1,proc:2,process:7,produc:0,propos:6,prototyp:9,provid:[2,9],publish:9,python:[1,2,4,6,7,8,9],queue:2,rais:2,rajchl:9,random:2,randomli:2,rang:2,rank:[1,4,5,6,7,8],read:2,read_fn:2,reader:2,readm:9,recognit:[2,6],refer:[2,9],regress:6,regression_classif:[0,3],regular:[4,6,7,8],regularis:1,relev:2,relu6:[1,4,6,7,8],relu:[1,7],repeat:7,repositori:9,repres:1,reproduc:9,requir:[1,4,5,6,7,8],research:9,residu:[1,6,7],residual_fcn_3d:7,residual_unet_3d:7,residual_unit:0,resiz:2,resize_image_with_crop_or_pad:2,resnet:[0,3],resnet_3d:6,resolut:[4,5,6,7,8],respect:[0,7],ronneberg:7,run:0,same:2,sample_dict:0,save:2,scalar:1,scale:[2,4,5,6,7],segment:[0,3],semant:7,separ:9,serv:2,serving_input_receiver_fn:2,session:[0,2],session_run_hook:2,sessionrunhook:2,set:1,shape:[0,1,2,7],shuffl:2,shuffle_cache_s:2,sigma:2,simard:2,similar:1,simpl:8,simple_super_resolut:[0,3],simple_super_resolution_3d:8,size:[1,2,4,5,6,7,8],slice:0,slide:0,sliding_window_segmentation_infer:0,slidingwindow:0,smaller:2,smooth:1,sourc:[0,1,2,4,5,6,7,8,9],spars:1,sparse_balanced_crossentropi:1,sparsetensor:2,spatial:[1,2],specif:[2,9],specifi:2,standard:7,state:9,stddev:2,steinkrau:2,stopiter:2,str:[1,4],stride:[0,1,4,5,6,7],string:[2,4,5,6,7,8],structur:2,sub:1,subject:2,subsampl:7,subsample_factor:7,subsampled_filt:7,subsampled_input_shap:7,subsampled_kernel:7,subsampled_residu:7,subsampled_strid:7,super_resolut:[0,3],support:1,tensor:[1,2,4,5,6,7,8],tensorflow:[0,1,2,4,6,7,8,9],thi:[0,1,7,9],threshold:9,toolkit:9,top:9,total:2,train:[1,2,4,5,6,7,8,9],trainabl:1,transform:2,transpos:[1,4,5,7],trigger:2,tupl:[1,2,4,5,6,7,8],tutori:9,twitter:9,type:[0,1,2,4,5,6,7,8],typic:7,unet:[0,3],unit:[1,2,4,6,7],until:2,upsaml:1,upsampl:[0,4,5,7,8],upsample_and_concat:7,upsampling_factor:8,upscor:7,upscore_layer_3d:7,use:[1,2,4,6,7,8],use_bia:[1,4,5,6,7,8],use_prelu:7,used:[0,1,7],useful:0,uses:[4,5,6,7,8],using:[1,6,7],valid:7,valu:[1,2],vanilla_residual_unit_3d:1,variabl:1,varianc:2,variancesc:[1,4,6,7,8],vector:[4,6,7,8],via:[1,4,5,6,7],visual:2,volum:1,when:2,where:2,wherea:7,whether:[0,1,4,5,6,7,8],which:[0,1,2],whiten:2,window:[0,2],window_shap:0,within:2,work:9,wrapper:2,written:9,yiel:2,yield:2,zero:[1,2,4,6,7,8]},titles:["dltk package","dltk.core package","dltk.io package","dltk.networks package","dltk.networks.autoencoder package","dltk.networks.gan package","dltk.networks.regression_classification package","dltk.networks.segmentation package","dltk.networks.super_resolution package","DLTK documentation"],titleterms:{abstract_read:2,activ:1,augment:2,autoencod:4,contact:9,content:[0,1,2,3,4,5,6,7,8],convolutional_autoencod:4,core:[1,2],dcgan:5,deepmed:7,dltk:[0,1,2,3,4,5,6,7,8,9],document:9,fcn:7,gan:5,get:9,indic:9,loss:1,metric:1,model:9,modul:[0,1,2,3,4,5,6,7,8],network:[3,4,5,6,7,8],packag:[0,1,2,3,4,5,6,7,8],preprocess:2,regression_classif:6,residual_unit:1,resnet:6,segment:7,simple_super_resolut:8,start:9,super_resolut:8,tabl:9,team:9,unet:7,upsampl:1,util:0,zoo:9}})